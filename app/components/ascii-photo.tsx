'use client'

import { useState, useEffect, useCallback, type ComponentType } from 'react'
import type { AsciiSettings } from './ascii-scene'

type AsciiSceneProps = {
  src: string
  bgColor?: string
  settings: AsciiSettings
  fit?: 'cover' | 'contain'
}

const DEFAULT_SETTINGS: AsciiSettings = {
  contrast: 1,
  brightness: -0.15,
  resolution: 0.27,
  characters: ' .:-+*=%@#',
  fgColor: '#2dd4bf',
  invert: true,
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  return (
    <label className="flex items-center gap-2 text-[10px] font-mono text-[#888]">
      <span className="w-20 shrink-0">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="flex-1 h-1 accent-[#2dd4bf]"
      />
      <span className="w-10 text-right tabular-nums">{value.toFixed(2)}</span>
    </label>
  )
}

function Controls({
  settings,
  onChange,
}: {
  settings: AsciiSettings
  onChange: (s: AsciiSettings) => void
}) {
  const set = useCallback(
    (key: keyof AsciiSettings, val: AsciiSettings[keyof AsciiSettings]) =>
      onChange({ ...settings, [key]: val }),
    [settings, onChange]
  )

  return (
    <div className="absolute top-2 left-2 z-50 bg-[#0c0c0e]/90 border border-[#2a2a30] rounded p-3 space-y-2 w-72 backdrop-blur-sm">
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#52525b]">
        ASCII TUNER
      </span>
      <Slider label="Contrast" value={settings.contrast} min={0.5} max={4.0} step={0.1} onChange={(v) => set('contrast', v)} />
      <Slider label="Brightness" value={settings.brightness} min={-0.5} max={0.5} step={0.05} onChange={(v) => set('brightness', v)} />
      <Slider label="Resolution" value={settings.resolution} min={0.05} max={0.4} step={0.01} onChange={(v) => set('resolution', v)} />
      <label className="flex items-center gap-2 text-[10px] font-mono text-[#888]">
        <span className="w-20 shrink-0">Invert</span>
        <input type="checkbox" checked={settings.invert} onChange={(e) => set('invert', e.target.checked)} className="accent-[#2dd4bf]" />
      </label>
      <label className="flex items-center gap-2 text-[10px] font-mono text-[#888]">
        <span className="w-20 shrink-0">Color</span>
        <input type="color" value={settings.fgColor} onChange={(e) => set('fgColor', e.target.value)} className="w-6 h-4 bg-transparent border-0 cursor-pointer" />
        <span className="tabular-nums">{settings.fgColor}</span>
      </label>
      <label className="flex flex-col gap-1 text-[10px] font-mono text-[#888]">
        <span>Characters</span>
        <input type="text" value={settings.characters} onChange={(e) => set('characters', e.target.value)} className="bg-[#18181b] border border-[#2a2a30] rounded px-1.5 py-0.5 text-[#d4d2cf] font-mono text-[10px]" />
      </label>
      <button
        onClick={() => navigator.clipboard.writeText(JSON.stringify(settings, null, 2))}
        className="w-full mt-1 py-1 text-[10px] font-mono tracking-[0.15em] uppercase bg-[#2dd4bf]/10 text-[#2dd4bf] border border-[#2dd4bf]/20 rounded hover:bg-[#2dd4bf]/20 transition-colors"
      >
        COPY SETTINGS TO CLIPBOARD
      </button>
    </div>
  )
}

export function AsciiPhoto({
  src,
  debug = false,
  initialSettings,
  fit = 'cover',
}: {
  src: string
  debug?: boolean
  initialSettings?: Partial<AsciiSettings>
  fit?: 'cover' | 'contain'
}) {
  const [Scene, setScene] = useState<ComponentType<AsciiSceneProps> | null>(null)
  const [settings, setSettings] = useState<AsciiSettings>({
    ...DEFAULT_SETTINGS,
    ...initialSettings,
  })

  useEffect(() => {
    import('./ascii-scene').then((m) => setScene(() => m.AsciiScene))
  }, [])

  if (!Scene) return null

  return (
    <div className="relative w-full h-full">
      {debug && <Controls settings={settings} onChange={setSettings} />}
      <Scene src={src} settings={settings} fit={fit} />
    </div>
  )
}

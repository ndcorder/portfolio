'use client'

import { Canvas, useLoader, useThree, useFrame, extend } from '@react-three/fiber'
import { AsciiRenderer } from '@react-three/drei'
import * as THREE from 'three'
import { Suspense, useMemo, useRef } from 'react'

class ContrastMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        map: { value: null },
        contrast: { value: 1.8 },
        brightness: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D map;
        uniform float contrast;
        uniform float brightness;
        varying vec2 vUv;
        void main() {
          vec4 tex = texture2D(map, vUv);
          float gray = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
          gray = (gray - 0.5) * contrast + 0.5 + brightness;
          gray = clamp(gray, 0.0, 1.0);
          gl_FragColor = vec4(vec3(gray), 1.0);
        }
      `,
    })
  }
}

extend({ ContrastMaterial })

declare module '@react-three/fiber' {
  interface ThreeElements {
    contrastMaterial: any
  }
}

function PhotoPlane({
  src,
  contrast,
  brightness,
  fit = 'cover',
}: {
  src: string
  contrast: number
  brightness: number
  fit?: 'cover' | 'contain'
}) {
  const texture = useLoader(
    THREE.TextureLoader,
    src,
    undefined,
    (err) => console.warn('Failed to load image:', src, err)
  )
  const { viewport } = useThree()
  const matRef = useRef<ContrastMaterial>(null)
  const material = useMemo(() => {
    const m = new ContrastMaterial()
    m.uniforms.map.value = texture
    return m
  }, [texture])

  useFrame(() => {
    if (matRef.current) {
      matRef.current.uniforms.contrast.value = contrast
      matRef.current.uniforms.brightness.value = brightness
    }
  })

  if (!texture?.image) return null

  const imgAspect = texture.image.width / texture.image.height
  const vpAspect = viewport.width / viewport.height
  let w = viewport.width
  let h = viewport.height
  if (fit === 'cover') {
    if (imgAspect > vpAspect) {
      w = h * imgAspect
    } else {
      h = w / imgAspect
    }
  } else {
    if (imgAspect > vpAspect) {
      h = w / imgAspect
    } else {
      w = h * imgAspect
    }
  }

  return (
    <mesh>
      <planeGeometry args={[w, h]} />
      <primitive object={material} ref={matRef} attach="material" />
    </mesh>
  )
}

export type AsciiSettings = {
  contrast: number
  brightness: number
  resolution: number
  characters: string
  fgColor: string
  invert: boolean
}

export function AsciiScene({
  src,
  bgColor = 'transparent',
  settings,
  fit = 'cover',
}: {
  src: string
  bgColor?: string
  settings: AsciiSettings
  fit?: 'cover' | 'contain'
}) {
  return (
    <Canvas
      gl={{ alpha: true }}
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <PhotoPlane
          src={src}
          fit={fit}
          contrast={settings.contrast}
          brightness={settings.brightness}
        />
      </Suspense>
      <AsciiRenderer
        fgColor={settings.fgColor}
        bgColor={bgColor}
        characters={settings.characters}
        resolution={settings.resolution}
        invert={settings.invert}
      />
    </Canvas>
  )
}

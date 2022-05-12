const COLORS = [
  'dragonfruit',
  'carrot',
  'sun',
  'lime',
  'turquoise',
  'wine',
  'slime',
  'seafoam',
  'cherry',
  'marine',
  'seaweed',
  'moon',
  'fiji',
  'blueberry',
  'arctic',
  'highlighter',
  'flamingo',
  'ruby',
  'punch',
  'creamsicle',
]

export function randomColor() {
  const index = Math.floor(Math.random() * (COLORS.length - 0) + 0)
  return COLORS[index]
}

export function formatViewers(viewer_count) {
  // ES2020 adds support for this in Intl.NumberFormat Using notation as follows:
  return Intl.NumberFormat('en', { notation: 'compact' }).format(viewer_count)
}

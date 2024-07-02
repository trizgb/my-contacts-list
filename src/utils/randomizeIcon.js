import { emojis } from '../../emojis.json'

export const randomizeIcon = () => {
  return emojis[Math.floor(Math.random() * emojis.length)]
}

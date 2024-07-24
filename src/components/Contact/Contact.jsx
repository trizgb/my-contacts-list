import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { formatPhone } from '../../utils/formatPhone'

const Contact = ({ id, avatar, name, surname, icon, phone }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  const scale = useTransform(scrollYProgress, [0, 1, 1], [1, 1.05, 1])

  // https://codesandbox.io/p/devbox/usescroll-offset-visualization-gmhwl3?file=%2Fsrc%2FApp.tsx%3A21%2C3-22%2C1

  return (
    <motion.article
      ref={ref}
      key={id}
      style={{ scale }}
      whileHover={{ scale: 1.05 }}
      className="flex gap-5 items-center p-4"
    >
      <img className="rounded-full h-20 w-20" src={avatar} />
      <div className="flex flex-col">
        <div className="text-slate-900 flex gap-2 flex-wrap font-medium text-xl lg:text-2xl">
          <p>{name}</p>
          <p>{surname}</p>
          <span>{icon}</span>
        </div>
        <p className="text-slate-500 text-lg">{formatPhone(phone)}</p>
      </div>
    </motion.article>
  )
}

export default Contact

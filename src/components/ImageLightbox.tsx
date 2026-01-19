'use client'

import { AnimatePresence, motion } from 'motion/react'

interface ImageLightboxProps {
  selectedImage: string | null
  onClose: () => void
}

export default function ImageLightbox({ selectedImage, onClose }: ImageLightboxProps) {
  const isVideo = selectedImage?.endsWith('.mp4')

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors z-50 cursor-pointer"
            >
              <span className="material-icons text-3xl">close</span>
            </button>
            {isVideo ? (
              <video
                src={selectedImage}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div
                className="relative w-full h-full"
                style={{
                  backgroundImage: `url("${selectedImage}")`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

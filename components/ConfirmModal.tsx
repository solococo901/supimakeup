"use client"

import { motion, AnimatePresence } from "framer-motion"

export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title = "Confirm",
  description = "Are you sure?",
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  title?: string
  description?: string
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-xl"
          >
            <h2 className="text-xl font-serif mb-3">
              {title}
            </h2>

            <p className="text-sm text-black/60 mb-6 leading-relaxed">
              {description}
            </p>

            <div className="flex justify-end gap-3 text-sm">

              <button
                onClick={onClose}
                className="px-4 py-2 border border-black/20 rounded-full hover:bg-black/5 transition"
              >
                Cancel
              </button>

              <button
                onClick={onConfirm}
                className="px-4 py-2 bg-black text-white rounded-full hover:opacity-80 transition"
              >
                Delete
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
'use client'
import { useDropzone } from 'react-dropzone'
import styles from './page.module.css'
import { useCallback, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const onDrop = useCallback((acceptedFile: File[]) => {
    if (acceptedFile.length === 1) {
      setFile(acceptedFile[0])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  })

  return (
    <div className={styles.page}>
      <main className={styles.wrapper}>
        <div className={styles.text}>
          <h1 className={styles.title}>AI traffic violation checker</h1>
          <p className={styles.subtitle}>
            Ensure safer roads with AI traffic violation checker. Analyze
            driving clips effortlessly to detect traffic rule violations and
            promote responsible driving behavior.
          </p>
        </div>
        <div className={styles.inputWrapper}>
          <div
            className={clsx(styles.fileInputWrapper, {
              [styles.inputTinted]: isDragActive,
            })}
            {...getRootProps()}
          >
            <p className={styles.inputText}>
              Drag file here to
              <label htmlFor="file-input" className={styles.downloadLabel}>
                upload
              </label>
            </p>
            <input
              {...getInputProps()}
              name="file-input"
              className={styles.input}
            />
          </div>
        </div>
        <button className={styles.submitButton}>
          <Image
            className={styles.submitButtonIcon}
            src="/sparkles.svg"
            alt="sparkles"
            width={24}
            height={24}
          />
          <span className={styles.submitButtonText}>Check</span>
        </button>
      </main>
    </div>
  )
}

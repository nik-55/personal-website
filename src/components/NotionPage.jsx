'use client';
import * as React from 'react'
import { NotionRenderer } from 'react-notion-x';
import dynamic from 'next/dynamic'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)


export default function NotionPage({ recordMap}) {

  return (
    <div className="bg-secondary">
      <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={false} components={{
      Code,
        Collection,
    }}
/>
    </div>)
}
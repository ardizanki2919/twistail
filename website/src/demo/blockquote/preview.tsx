'use client'

import { Blockquote, BlockquoteAuthor } from 'twistail-react/blockquote'

export default function BlockquoteDemo() {
  return (
    <Blockquote>
      The science of operations, as derived from mathematics more especially, is a science of
      itself, and has its own abstract truth and value.
      <BlockquoteAuthor>Ada Lovelace</BlockquoteAuthor>
    </Blockquote>
  )
}

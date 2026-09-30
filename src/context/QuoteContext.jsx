import { createContext, useContext, useState, useCallback } from 'react'
import QuoteModal from '../components/QuoteModal'

const QuoteCtx = createContext({ open: () => {} })

export function QuoteProvider({ children }) {
  const [state, setState] = useState({ open: false, product: '' })
  const open = useCallback((product = '') => setState({ open: true, product }), [])
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), [])
  return (
    <QuoteCtx.Provider value={{ open }}>
      {children}
      <QuoteModal isOpen={state.open} initialProduct={state.product} onClose={close} />
    </QuoteCtx.Provider>
  )
}

export const useQuote = () => useContext(QuoteCtx)

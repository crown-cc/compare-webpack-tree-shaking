import ajv from 'ajv'

function useAjv() {
  return {
    ajv: new ajv()
  }
}

export { useAjv }
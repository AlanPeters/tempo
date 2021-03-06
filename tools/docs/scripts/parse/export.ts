import { ExportDeclaration, ExportSpecifier } from 'ts-morph'
import { docOfContent } from './jsdoc'
import { adjustSignature } from './signature'
import { DocEntity } from './doc_entity'
import { getLineNumber } from './line_number'

export const exportOfDeclaration = (e: ExportDeclaration): DocEntity[] => {
  return e.getNamedExports().map(exportOfSpecifier)
}

const exportOfSpecifier = (e: ExportSpecifier): DocEntity => {
  const signatures = [adjustSignature(e.getType().getText(e))] // TODO signature seems wrong ?
  const name = e.compilerNode.name.text
  const comment = e.getLeadingCommentRanges()[0]?.getText()
  const doc = docOfContent(comment ?? '')
  return {
    ...doc,
    kind: 'export',
    name,
    line: getLineNumber(e),
    signatures
  }
}

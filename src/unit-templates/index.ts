import { UnitTypeName } from '../unit'
import UH1H from './uh-1h.json'
import AH64D from './ah-64d.json'
import MI24 from './mi-24.json'
import MI8 from './mi-8.json'
import UH60 from './uh-60.json'
import KA50 from './ka-50.json'
import KA503 from './ka-50-3.json'
import SA342L from './sa342l.json'
import SA342M from './sa342m.json'
import SA342Mistral from './sa342mistral.json'
import SA342Minigun from './sa342minigun.json'

// TODO: use real types here, I used any here becasue I was feeling lazy
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function unitTemplateFrom(typeName: UnitTypeName): any {
  if (UnitTypeName.UH1H === typeName) {
    return UH1H
  }
  if (UnitTypeName.AH64D === typeName) {
    return AH64D
  }
  if (UnitTypeName.MI24 === typeName) {
    return MI24
  }
  if (UnitTypeName.MI8 === typeName) {
    return MI8
  }
  if (UnitTypeName.UH60 === typeName) {
    return UH60
  }
  if (UnitTypeName.KA50 === typeName) {
    return KA50
  }
  if (UnitTypeName.KA503 === typeName) {
    return KA503
  }
  if (UnitTypeName.SA342L === typeName) {
    return SA342L
  }
  if (UnitTypeName.SA342M === typeName) {
    return SA342M
  }
  if (UnitTypeName.SA342Minigun === typeName) {
    return SA342Minigun
  }
  if (UnitTypeName.SA342Mistral === typeName) {
    return SA342Mistral
  }

  throw new Error(`No unit template for typename ${typeName}`)
}

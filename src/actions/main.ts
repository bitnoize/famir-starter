import { AnalyzeController, AnalyzeService } from '@famir/actions-app'
import { DIComposer } from '@famir/common'
//import { CustomController} from './modules/index.js'

export const main: DIComposer = (container) => {
  loadControllers(container)

  buildQueueProcessors(container)
}

const loadControllers: DIComposer = (container) => {
  AnalyzeService.register(container)
  AnalyzeController.register(container)

  // Register custom controllers here...
  //CustomController.register(container)
}

const buildQueueProcessors: DIComposer = (container) => {
  AnalyzeController.resolve(container).use()

  // Custom processor here...
  //CustomController.resolve(container).use()
}

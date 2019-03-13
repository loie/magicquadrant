import * as util from 'util'

export const debug = (object: Object) : void => {
	console.log(util.inspect(object, true, undefined, true))
}
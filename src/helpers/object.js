import { lensPath, set } from 'ramda'

export const updateObjectIn = (obj, path, value) => set(lensPath(path), value, obj)

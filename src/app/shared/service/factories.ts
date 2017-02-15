import {Config} from '../../config/Config';

export function configLoader(config: Config){
  return () => config.load();
}

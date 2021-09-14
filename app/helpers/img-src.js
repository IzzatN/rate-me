import { helper } from '@ember/component/helper';
import config from 'rate-me/config/environment';

export function imgSrc(params) {
  let [src] = params;

  return config.rootURL + src;
}

export default helper(imgSrc);

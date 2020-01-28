//, store/index.js 에선 스토어를 생성한다음에 내보내줍니다.
// 이렇게 모듈화된 스토어는 브라우저쪽에서만 사용되는 스토어입니다
// (서버사이드 렌더링을 하게 될 땐 아까 언급했던 configure 를 통하여 그때 그때 만듭니다.)
// 이렇게 모듈화된 스토어는 리액트 애플리케이션을 초기설정 할 때 사용됩니다.

import configure from './configure';
export default configure();
import useModalDOM from '../hooks/useModalDOM';
import useScrollAnchor from '../hooks/useScrollAnchor';
// import useScrollToTop from '../hooks/useScrollToTop';

export default function Documents({ children }) {
  useModalDOM();
  useScrollAnchor();
  //   useScrollToTop();
  return children;
}

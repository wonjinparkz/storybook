// 컴포넌트 exports
export { default as GovernmentHeader } from './GovernmentHeader';
export { default as GovernmentFooter } from './GovernmentFooter';
export { default as FullBannerCarousel } from './FullBannerCarousel';
export { default as IconFeaturesCarousel } from './IconFeaturesCarousel';
export { default as ComplexFeaturesCarousel } from './ComplexFeaturesCarousel';
export { default as ContentsCardCarousel } from './ContentsCardCarousel';
export { default as ApplyPage } from './ApplyPage';
export { default as ContentsPage } from './ContentsPage';

// 프로바이더 및 유틸리티 exports
export { 
  GovernmentProvider, 
  withGovernmentAssets, 
  useGovernment,
  GovernmentLoading 
} from './components/GovernmentProvider';

export { 
  loadGovernmentAssets,
  loadStyles,
  loadScripts,
  cleanupGovernmentAssets
} from './utils/auto-loader';

// 타입 exports
export * from './types';
export interface CaseData {
  title: string;
  beforeSrc: string;
  afterSrc: string;
  category: 'roof' | 'exterior' | 'interior' | 'bathroom';
  description?: string;
  duration?: string;
}

export const cases: CaseData[] = [
  {
    title: '屋根塗装工事',
    beforeSrc: '/case1-before.jpg',
    afterSrc: '/case1-after.jpg',
    category: 'roof'
  },
  {
    title: '屋根塗装工事',
    beforeSrc: '/case3-before.jpg',
    afterSrc: '/case3-after.jpg',
    category: 'roof'
  },
  {
    title: '雨戸塗装工事',
    beforeSrc: '/case4-before.jpg',
    afterSrc: '/case4-after.jpg',
    category: 'exterior'
  },
  {
    title: '浴室リフォーム',
    beforeSrc: '/case5-before.jpg',
    afterSrc: '/case5-after.jpg',
    category: 'bathroom'
  },
  {
    title: '浴室ドア交換',
    beforeSrc: '/case2-before.jpg',
    afterSrc: '/case2-after.jpg',
    category: 'bathroom'
  },
  {
    title: '内装フローリングクロス張り替え',
    beforeSrc: '/case6-before.jpg',
    afterSrc: '/case6-after.jpg',
    category: 'interior'
  },
  {
    title: '洗面脱衣場リノベーション',
    beforeSrc: '/case7-before.jpg',
    afterSrc: '/case7-after.jpg',
    category: 'bathroom'
  }
];

export const categoryLabels = {
  roof: '屋根工事',
  exterior: '外壁工事',
  interior: '内装工事',
  bathroom: '水回り工事'
} as const;
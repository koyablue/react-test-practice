import { render, screen } from '@testing-library/react';
import App from './App';

// test('testの内容')
test('renders learn react link', () => {
  // Appコンポーネントをrender
  render(<App />);
  // 文字列でelementを取得
  const linkElement = screen.getByText(/learn react/i);
  // documentの中にlinkElementに存在することが期待されている(そうなればokということ)
  expect(linkElement).toBeInTheDocument();
});

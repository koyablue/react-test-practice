import { render, screen } from "@testing-library/react"
import Login from "../Login"

// jestでテストする
// jsetはsetupTests.jsでimportしているのでいちいちimportしなくてもいい
describe('Test Login Component', () => {
	// この関数一つがテスト
	// findAllByRoleが非同期なのでasync await使う
	test('render form with 1 button', async () => {
		// renderやscreenはtesting libraryの関数
		render(<Login />)
		const button = await screen.findAllByRole('button')
		expect(button).toHaveLength(1)
	})
})
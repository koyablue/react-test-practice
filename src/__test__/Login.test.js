import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Login, { validateEmail } from "../Login"

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

	test('should be failed on email validation', () => {
		const testEmail = 'example.com'
		expect(validateEmail(testEmail)).not.toBe(true)
	})

	test('should be passed on email validation', () => {
		const testEmail = 'example@example.com'
		expect(validateEmail(testEmail)).toBe(true)
	})

	test('password input should have type password', () => {
		render(<Login />)
		const password = screen.getByPlaceholderText('パスワード入力')
		expect(password).toHaveAttribute('type', 'password')
	})

	test('should be able to submit the form', () => {
		render(<Login />)
		// data-testidでgetする
		const submitButton = screen.getByTestId('submit')
		const email = screen.getByPlaceholderText('メールアドレス入力')
		const password = screen.getByPlaceholderText('パスワード入力')

		userEvent.type(email, 'example@example.com')
		userEvent.type(password, 'abcdef')
		userEvent.click(submitButton)

		const userInfo = screen.getByText('example@example.com')
		expect(userInfo).toBeInTheDocument(userInfo)
	})
})
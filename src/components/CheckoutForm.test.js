import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'
import App from '../App'

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(App)
});

test("shows success message on submit with form details", () => {
    render(<App/>)
    const cart = screen.getByText(/cart/i)
    userEvent.click(cart)
    const checkout = screen.getByText(/checkout/i)
    userEvent.click(checkout)
    const checkout2 = screen.getByRole('button')
    userEvent.click(checkout2)
    const message = screen.getByTestId('successMessage')
    expect(message).toBeInTheDocument()
});

import { describe, it, expect } from 'vitest';
import { render, screen } from "../../utils/test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import NewCreation from './NewCreation';

expect.extend(toHaveNoViolations);

describe("Given the NewCreation component", () => {
  describe("When it is rendered", () => {
    it("it displays item information", () => {
      render(
        <NewCreation 
          img={'image.test'}
          name={'Test Vase'}
          shape={'Vase'}
          description={"A lovely test vase"}
        />
      );

      expect(screen.getByText('Test Vase')).toBeInTheDocument();
      expect(screen.getByText('Vase')).toBeInTheDocument();
      expect(screen.getByText('A lovely test vase')).toBeInTheDocument();
      expect(screen.getByRole("img")).toBeInTheDocument();
    });
  });

  it("It has no accessibility violations", async () => {
    const { container } = render(
        <NewCreation 
          img={'image.test'}
          name={'Test Vase'}
          shape={'Vase'}
          description={"A lovely test vase"}
        />
      );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group"

const TIMEOUT = 500

const getTransitionStyles = {
  entering: {
    position: `absolute`,
    transform: `translateX(670px)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    transform: `translateX(0px)`,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    transform: `translateX(-670px)`,
  },
}

const Transition = ({ children, location }) => {
  return (
    <TransitionGroup style={{ position: "relative" }}>
      <ReactTransition key={location} timeout={TIMEOUT}>
        {(status) => (
          <div
            style={{
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}

export default Transition

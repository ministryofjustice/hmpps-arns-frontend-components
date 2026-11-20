import { getOperationName, shouldIgnoreIncomingRequest, shouldIgnoreOutgoingRequest } from './azureAppInsights'

describe('azureAppInsights', () => {
  describe('shouldIgnoreIncomingRequest', () => {
    it.each([
      ['GET', '/assets/some.css', true],
      ['GET', '/health', true],
      ['GET', '/health/ready', true],
      ['GET', '/ping', true],
      ['GET', '/info', true],
      ['GET', '/something-else', false],
      ['POST', '/health', false],
      ['GET', '/sandwich/health/with-something-else', false],
    ])('returns %s for %s %s', (method, url, ignored) => {
      expect(shouldIgnoreIncomingRequest({ method, url })).toBe(ignored)
    })
  })

  describe('shouldIgnoreOutgoingRequest', () => {
    it.each([
      [{ hostname: 'sqs.eu-west-2.amazonaws.com' }, true],
      [{ host: 'sqs.us-east-1.amazonaws.com:443' }, true],
      [{ hostname: 'anything.else' }, false],
      [{}, false],
    ])('returns %s for %o', (request, ignored) => {
      expect(shouldIgnoreOutgoingRequest(request)).toBe(ignored)
    })
  })

  describe('getOperationName', () => {
    it('uses the Express route path instead of the concrete request URL', () => {
      expect(getOperationName('GET', '/users/:userId')).toBe('GET /users/:userId')
    })

    it('formats multiple route paths', () => {
      expect(getOperationName('GET', ['/first', '/second'])).toBe('GET "/first" | "/second"')
    })
  })
})

import uiReducer, { setIsDark, setLoading } from '@src/store/uiSlice';

describe('uiReducer 에서', () => {
  context('setIsDark 실행시', () => {
    it('값이 정상적으로 반영된다', () => {
      const initialState = {
        isLoading: false,
      };

      const state = uiReducer(
        initialState,
        setIsDark({
          isDark: true,
        }),
      );

      expect(state.isDark).toEqual(true);
    });
  });
  context('setIsLoading 실행시', () => {
    it('값이 정상적으로 반영된다', () => {
      const initialState = {
        isLoading: false,
      };

      const state = uiReducer(
        initialState,
        setLoading({
          isLoading: true,
        }),
      );

      expect(state.isLoading).toEqual(true);
    });
  });
});

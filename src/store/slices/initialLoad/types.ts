export enum initialLoadTypes {
  INITIAL_LOAD_REQUEST = 'initialLoad/initialLoadRequest',
  INITIAL_LOAD_FAILED = 'initialLoad/initialLoadFailed',
  INITIAL_LOAD_SUCCESS = 'initialLoad/initialLoadSuccess',
}

export interface InitialLoadState {
  isLoading: boolean
  error: string | null
}

export interface InitialLoadFailedPayload {
  error: string | null
}

export interface InitialLoadRequest {
  type: typeof initialLoadTypes.INITIAL_LOAD_REQUEST
}

export interface InitialLoadFailed {
  type: typeof initialLoadTypes.INITIAL_LOAD_FAILED
  payload: InitialLoadFailedPayload
}

export interface InitialLoadSuccess {
  type: typeof initialLoadTypes.INITIAL_LOAD_SUCCESS
}

export type InitialLoadActions =
  | InitialLoadRequest
  | InitialLoadFailed
  | InitialLoadSuccess

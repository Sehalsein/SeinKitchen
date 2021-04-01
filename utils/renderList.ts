export default function renderList<T>(
  collection: T[] | undefined,
  loading: boolean,
  renderItem: (item: T, index: number | undefined, collection: T[]) => any,
  renderEmpty?: () => any,
  renderLoading?: () => any
) {
  if (loading) {
    return renderLoading ? renderLoading() : null
  }
  if (collection === undefined) {
    return renderEmpty ? renderEmpty() : null
  }
  if (collection.length === 0) {
    return renderEmpty ? renderEmpty() : null
  }
  return collection.map(renderItem)
}

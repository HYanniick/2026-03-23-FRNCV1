import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  footer: {
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    paddingTop: 12,
  },
  total: {
    textAlign: 'right',
    fontSize: 16,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
  },
});

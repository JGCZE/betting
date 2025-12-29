export const generateSlug = (title: string): string => {
  const baseSlug = title
    ? title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]/g, '-')
    : 'bet';

  const uniqueSuffix = Date.now().toString(36).slice(-4);
  return `${baseSlug}-${uniqueSuffix}`;
}

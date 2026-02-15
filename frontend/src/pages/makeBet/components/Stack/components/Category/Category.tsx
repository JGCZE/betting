import type { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox';
import { ECategory } from '@/lib/config';

const czToKey = Object.fromEntries(
  Object.entries(ECategory).map(([key, label]) => [label, key])
) as Record<ECategory, keyof typeof ECategory>

const Category = (): ReactElement => {
  const { control } = useFormContext();

  const categoryLabels = Object.values(ECategory)

  return (
    <div className=''>
      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
        Kategorie
      </label>

      <Controller
        control={control}
        name="category"
        render={({ field }) => (
          <Combobox
            items={categoryLabels}
            onValueChange={(label) => field.onChange(label ? czToKey[label as ECategory] : null)}
            value={field.value ? ECategory[field.value as keyof typeof ECategory] : null}
          >
            <ComboboxInput
              placeholder="Vyberte kategorii sázky..."
              showClear
            />
            <ComboboxContent>
              <ComboboxEmpty>Žádná kategorie nenalezena.</ComboboxEmpty>

              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        )}
      />
    </div>
  )
}

export default Category;

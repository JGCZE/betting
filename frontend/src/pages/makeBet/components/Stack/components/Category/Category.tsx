import type { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox';
import { STACK } from '@/lib/config';

const Category = (): ReactElement => {
  const { control } = useFormContext();

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
            items={STACK}
            onValueChange={field.onChange}
            value={field.value}
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

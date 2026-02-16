import BetCardSkeleton from '@/components/ui/betCardSkeleton';
import type { TAllBets } from '../../api/useAllBetsApi';

interface IProps {
  category?: string,
  data?: Array<TAllBets>;
  error: boolean;
  isLoading: boolean
}

const HomePageStates = ({ category, data, error, isLoading }: IProps) => {
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
        <div className="w-14 h-14 rounded-full bg-red-primary/10 flex items-center justify-center">
          <svg className="w-7 h-7 text-red-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-lg font-semibold text-foreground">Něco se pokazilo</p>
          <p className="text-navy-400 text-sm mt-1">Nepodařilo se načíst sázky. Zkus to znovu.</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4 p-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <BetCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (data?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
        <div className="w-14 h-14 rounded-full bg-navy-700 border-2 border-navy-600 flex items-center justify-center">
          <svg className="w-7 h-7 text-navy-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-lg font-semibold text-foreground">Žádné sázky</p>
          <p className="text-navy-400 text-sm mt-1">
            {category
              ? <>V kategorii <span className="text-green-primary font-medium">{category}</span> zatím nikdo nesází.</>
              : 'Zatím tu nejsou žádné sázky.'
            }
          </p>
        </div>
      </div>
    )
  }
};

export default HomePageStates

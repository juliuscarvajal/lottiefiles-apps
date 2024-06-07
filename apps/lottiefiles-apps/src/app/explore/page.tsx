import { SearchBar } from '@lottiefiles-apps/components';
import { getAnimations } from '@lottiefiles-apps/data';

export default function Page() {
  return (
    <div className="">
      <div className="wrapper space-y-4 py-4">
        <form action={getAnimations}>
          <div className="flex gap-2">
            <SearchBar />
          </div>
        </form>
        <div className="container grid grid-cols-autofill gap-4">
          <>Search results here...</>
        </div>
      </div>
    </div>
  );
}

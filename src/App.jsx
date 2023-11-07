import './App.css';
import { exampleArray } from './utils/constants';
import Card from './components/card/card';
export default function App() {
  return (
    <div className="mx-auto my-4">
      <div className="text-center p-4">
        <h1 className="font-bold text-4xl mb-4">Responsive Product Cards</h1>
        <h1 className="text-3xl">Tailwind</h1>
      </div>
      <div className="text-center py-4 px-4">
        <h2 className="font-bold text-sm mb-4">Thanks to <a href="https://unsplash.com/@nixcreative"
          className="underline font-black">Tyler Nix</a> for those images</h2>
      </div>
      <section id="Cards"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {exampleArray.map(item => <Card key={item.id} card={item} />)}
      </section>

    </div>
  )
}

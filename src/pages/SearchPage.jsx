import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

function SearchPage() {
  // 1. ເຊື່ອມຕໍ່ກັບ URL Params
  // 'searchParams' ໃຊ້ສຳລັບອ່ານ
  // 'setSearchParams' ໃຊ້ສຳລັບຂຽນ (ມັນຈະປ່ຽນ URL ໃຫ້ເຮົາ!)
  const [searchParams, setSearchParams] = useSearchParams();

  // 2. "ອ່ານ" ຄ່າ 'q' (query) ຈາກ URL ຕອນທີ່ໜ້າໂຫຼດ
  // ຖ້າບໍ່ມີ ກໍໃຫ້ເປັນ ""
  const initialQuery = searchParams.get("q") || "";

  // 3. ໃຊ້ State ທຳມະດາ ເພື່ອຄວບຄຸມ Input (ໄວ້ພິມ)
  // ໂດຍໃຫ້ຄ່າເລີ່ມຕົ້ນ ມາຈາກ URL
  const [inputValue, setInputValue] = useState(initialQuery);

  // 4. (Optional) ໃຊ້ useEffect ເພື່ອດຶງຂໍ້ມູນ
  // ທຸກຄັ້ງທີ່ 'initialQuery' (ຈາກ URL) ປ່ຽນ
  useEffect(() => {
    if (initialQuery) {
      console.log(`ກຳລັງດຶງຂໍ້ມູນ API ສຳລັບ: ${initialQuery}`);
      // fetch(`/api/search?q=${initialQuery}`)
    }
  }, [initialQuery]); // Dependency array

  // 5. ຟັງຊັນເມື່ອກົດ Submit
  const handleSearch = (e) => {
    e.preventDefault();
    // ນີ້ຄືຫົວໃຈຫຼັກ!
    // ເຮົາສັ່ງ "ອັບເດດ URL"
    // URL ຈະປ່ຽນເປັນ: /search?q=... (ສິ່ງທີ່ເຮົາພິມ)
    setSearchParams({ q: inputValue });
  };

  return (
    <div>
      <h1>ໜ້າຄົ້ນຫາ</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="ພິມຄຳຄົ້ນຫາ..."
        />
        <button type="submit">ຄົ້ນຫາ</button>
      </form>

      <hr />

      {/* 6. ສະແດງຜົນຈາກ URL (ບໍ່ແມ່ນຈາກ State ຂອງ Input) */}
      {initialQuery ? (
        <h2>ຜົນການຄົ້ນຫາສຳລັບ: "{initialQuery}"</h2>
      ) : (
        <p>ກະລຸນາພິມຄຳທີ່ຕ້ອງການຄົ້ນຫາ.</p>
      )}
    </div>
  );
}

export default SearchPage;

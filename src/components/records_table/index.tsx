import styles from "./index.module.scss";

const records = [
  {
    category: "食費",
    items: [
      { date: "2025-04-01", amount: 10000, description: "スーパー" },
      { date: "2025-04-02", amount: 15000, description: "外食" },
      { date: "2025-04-03", amount: 5000, description: "お菓子" },
      { date: "2025-04-04", amount: 20000, description: "食材まとめ買い" },
    ],
  },
  {
    category: "交通費",
    items: [
      { date: "2025-04-01", amount: 10000, description: "電車" },
      { date: "2025-04-02", amount: 15000, description: "タクシー" },
      { date: "2025-04-03", amount: 5000, description: "バス" },
      { date: "2025-04-04", amount: 20000, description: "ガソリン" },
    ],
  },
  {
    category: "娯楽費",
    items: [
      { date: "2025-04-01", amount: 20000, description: "ライブ" },
      { date: "2025-04-02", amount: 10000, description: "映画" },
      { date: "2025-04-03", amount: 10000, description: "ゲーム" },
      { date: "2025-04-04", amount: 10000, description: "カフェ" },
    ],
  },
  {
    category: "その他",
    items: [
      { date: "2025-04-01", amount: 15000, description: "日用品" },
      { date: "2025-04-02", amount: 10000, description: "プレゼント" },
      { date: "2025-04-03", amount: 5000, description: "文房具" },
      { date: "2025-04-04", amount: 20000, description: "修理費" },
    ],
  },
];

const RecordTable = () => {
  const formatDate = (date: string) => {
    const [year, month, day] = date.split("-");
    return `${parseInt(month)}/${parseInt(day)}`;
  };

  return (
    <div className={styles.table_container}>
      {records.map((record) => (
        <table key={record.category} className={styles.table}>
          <thead>
            <tr>
              <th colSpan={3}>{record.category}</th>
            </tr>
          </thead>
          <tbody>
            {record.items.map((item, index) => (
              <tr key={index}>
                <td className={styles.date}>{formatDate(item.date)}</td>
                <td className={styles.description}>{item.description}</td>
                <td className={styles.amount}>{`￥${item.amount}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default RecordTable;

import { NextPage } from "next";
import { parseISO, format } from "date-fns";

type Props = { dateString: string };

const Date: NextPage<Props> = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyyy-LL-dd")}</time>;
};

export default Date;

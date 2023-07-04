import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const UseIconsTecnologies = () => {
  const [infoTecnologies, setInfoTecnologies] = useState<
    { Tecnology: string; url: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const setTecnologies = ({ name }: { name: string }) => {
    const url = `https://logo.clearbit.com/${name.toLowerCase()}.com`;
    const getData = useCallback(async () => {
      setLoading(true);
      setInfoTecnologies((current) => [...current, { Tecnology: name, url }]);
      setLoading(false);
    }, [name]);
    useEffect(() => {
      return () => {
        getData();
      };
    }, [name]);
  };
  return { infoTecnologies, loading, setTecnologies };
};

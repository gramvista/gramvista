import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { updateSeo } from "../utils/seo";
import { company } from "../data/company";
export function useDocumentTitle(
  title: string,
  description = company.description,
) {
  const { pathname } = useLocation();
  useEffect(
    () => updateSeo(title, description, pathname),
    [title, description, pathname],
  );
}

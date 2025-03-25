
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <Select
      value={currentLanguage}
      onValueChange={(value) => changeLanguage(value as 'en' | 'pt-BR')}
    >
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="pt-BR">Português</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;

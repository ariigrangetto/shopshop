/* eslint-disable react/react-in-jsx-scope */
import { useId, type ChangeEvent } from "react";
import useFilterContext from "../hooks/useFilterContext";
import type { Category } from "../types";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";

import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";

import ListDivider from "@mui/joy/ListDivider";

export default function Filter() {
  const { filter, setFilter } = useFilterContext();
  const selectId = useId();
  const inputId = useId();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  function handleChange(_event: Event, value: number | number[]) {
    setFilter((prevState) => ({
      ...prevState,
      initialPrice: value as number,
    }));
  }

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    setFilter((prevState) => ({
      ...prevState,
      category: e.target.value as Category,
    }));
  }

  function handleChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter((prevState) => ({
      ...prevState,
      search: e.target.value,
    }));
  }

  return (
    <>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
          width: "100%",
        }}
      >
        <Input
          type='text'
          aria-label='product search input'
          value={filter.search}
          onChange={handleChangeSearch}
          disableUnderline
          placeholder='Eyeshadow Palette...'
          endAdornment={
            <Button
              type='submit'
              sx={{
                textTransform: "none",
                backgroundColor: "transparent",
                boxShadow: "none",
                ":hover": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                },
              }}
            >
              Search
            </Button>
          }
          fullWidth
          sx={{
            bgcolor: "grey.200",
            px: 2,
            borderRadius: "24px",
          }}
        />
      </Box>

      <ListDivider component='hr' sx={{ my: 3 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mb: 4,
          color: "white",
          fontSize: 17,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography fontWeight='medium' component='label' htmlFor={inputId}>
            Price:
          </Typography>
          <Slider
            size='small'
            valueLabelDisplay='auto'
            min={0}
            aria-label='price range'
            max={1000}
            id={inputId}
            value={filter.initialPrice}
            onChange={handleChange}
            sx={{ width: 150 }}
          />
          <Typography>${filter.initialPrice}</Typography>
        </Box>

        <Box
          aria-label='select options'
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography fontWeight='medium' component='label' htmlFor={selectId}>
            Category:
          </Typography>

          <Select
            labelId={selectId}
            id={selectId}
            aria-label='select category'
            value={filter.category}
            onChange={handleSelect}
            label='Category'
            sx={{
              borderRadius: "20px",
              color: "white",
              "& .MuiSelect-icon": { color: "white" },
            }}
          >
            <MenuItem aria-label='All option' value='all'>
              All
            </MenuItem>
            <MenuItem aria-label='Groceries option' value='groceries'>
              Groceries
            </MenuItem>
            <MenuItem aria-label='Beauty option' value='beauty'>
              Beauty
            </MenuItem>
            <MenuItem aria-label='Fragrances option' value='fragrances'>
              Fragrances
            </MenuItem>
            <MenuItem aria-label='Furniture option' value='furniture'>
              Furniture
            </MenuItem>
          </Select>
        </Box>
      </Box>
    </>
  );
}

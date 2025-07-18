/* eslint-disable react/react-in-jsx-scope */
import { useId } from "react";
import useFilterContext from "../hooks/useFilterContext";
import type { Category } from "../types";
import {
  Box,
  Input,
  Button,
  Slider,
  Typography,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";
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

  function handleSelect(e: SelectChangeEvent) {
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
            max={1000}
            id={inputId}
            value={filter.initialPrice}
            onChange={handleChange}
            sx={{ width: 150 }}
          />
          <Typography>${filter.initialPrice}</Typography>
        </Box>

        <Box
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
            <MenuItem value='all'>All</MenuItem>
            <MenuItem value='groceries'>Groceries</MenuItem>
            <MenuItem value='beauty'>Beauty</MenuItem>
            <MenuItem value='fragrances'>Fragrances</MenuItem>
            <MenuItem value='furniture'>Furniture</MenuItem>
          </Select>
        </Box>
      </Box>
    </>
  );
}

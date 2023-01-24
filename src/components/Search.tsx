import { TextField } from "@mui/material";

interface ISearch {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Search = (props: ISearch) => {
    const { onChange, value } = props;

    return <TextField
        label="Поиск"
        variant="standard"
        fullWidth
        type='search'
        value={value}
        onChange={onChange}
        sx={{ mb: '1.5rem' }} />;
};

export default Search;
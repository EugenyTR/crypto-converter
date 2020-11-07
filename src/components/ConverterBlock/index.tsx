import React from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField/TextField";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem";

interface IConverterBlock {
    classes: any;
}

const ConverterBlock: React.FC<IConverterBlock> = ({ classes }) => {
    return (
        <Paper className={classes.paper}>
            <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                    <TextField fullWidth label='Сумма'/>
                </FormControl>
                <FormControl className={classes.currencyType}>
                    <InputLabel>Валюта</InputLabel>
                    <Select value={10}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Ten</MenuItem>
                        <MenuItem value={30}>Ten</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                    <TextField fullWidth label='Сумма'/>
                </FormControl>
                <FormControl className={classes.currencyType}>
                    <InputLabel>Валюта</InputLabel>
                    <Select value={10}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Ten</MenuItem>
                        <MenuItem value={30}>Ten</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </Paper>
    );
};

export default ConverterBlock;

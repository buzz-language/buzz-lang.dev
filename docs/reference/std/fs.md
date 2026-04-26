# fs

## currentDirectory
```buzz
fun currentDirectory() > str !> FileSystemError
```
Returns current directory absolute path
**Returns:** current directory

## makeDirectory
```buzz
fun makeDirectory(path: str) > void !> FileSystemError, UnexpectedError
```
Creates directory path
- **`path`:** directory to create

## deleteFile
```buzz
fun deleteFile(path: str) > void !> FileSystemError, UnexpectedError
```
Deletes file at path
- **`path`:** direcotry/file to delete

## deleteDirectory
```buzz
fun deleteDirectory(path: str) > void !> FileSystemError, UnexpectedError
```
Deletes directory at path
- **`path`:** direcotry/file to delete

## move
```buzz
fun move(source: str, destination: str) > void !> FileSystemError, UnexpectedError
```
Moves/renames file
- **`source`:** file to move
- **`destination`:** where to move it

## list
```buzz
fun list(path: str) > [str] !> FileSystemError, UnexpectedError
```
List files under path
- **`path`:** directory to list

## exists
```buzz
fun exists(path: str) > bool !> FileSystemError
```
Returns true if path exists
- **`path`:** directory/file to test
**Returns:** wether file exists


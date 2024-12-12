<h1 align="center"> learning php </h1>

# PHP Installation Guide for Windows 11

This guide provides step-by-step instructions to install PHP on a Windows 11 machine.

## Prerequisites

-   A Windows 11 operating system.
-   Administrator privileges on your system.

---

## Step 1: Download PHP

1. Visit the official PHP website: [https://windows.php.net/download](https://windows.php.net/download).
2. Select the latest **Thread Safe (TS)** version for your system architecture (e.g., x64).
3. Download the corresponding ZIP file.

---

## Step 2: Extract PHP

1. Extract the downloaded ZIP file to a directory, e.g., `C:\php`.
2. Optionally, rename the extracted folder to `php` for simplicity.

---

## Step 3: Configure PHP

1. Navigate to the extracted folder (`C:\php`).
2. Locate the file `php.ini-development`.
3. Rename `php.ini-development` to `php.ini`.
4. Open the `php.ini` file in a text editor (e.g., Notepad).
5. Update the following settings:
    - Uncomment required extensions by removing the `;` before lines like:
        ```ini
        extension=curl
        extension=mbstring
        extension=mysqli
        extension=fileinfo
        ```
    - Set the timezone:
        ```ini
        date.timezone = "Asia/Dhaka"
        ```

---

## Step 4: Add PHP to System Path

1. Open **Settings** > **System** > **About** > **Advanced System Settings**.
2. In the **System Properties** window, click on **Environment Variables**.
3. Under **System Variables**, find and select the `Path` variable, then click **Edit**.
4. Click **New** and add the path to your PHP folder (e.g., `C:\php`).
5. Click **OK** to save the changes.

---

## Step 5: Verify Installation

1. Open Command Prompt.
2. Run the following command to check the PHP version:
    ```bash
    php -v
    ```
3. If PHP is installed correctly, you will see the version information.

---

## Step 6: Enable Required Extensions

1. Ensure any additional required extensions are enabled in the `php.ini` file by uncommenting their lines.
2. Save changes and restart your server or PHP service if necessary.

---

## Troubleshooting

-   Run `php --ini` in the terminal to verify the loaded `php.ini` file.
-   Ensure the `fileinfo` extension is enabled for compatibility with tools like Composer.
-   Restart your system if changes to the PATH variable do not take effect.

---

You have successfully installed PHP on Windows 11!

<h2> <a href="https://www.php.net/manual/en/features.commandline.webserver.php">Built-in web server</a> </h2>

-   first you need to open any terminal.
-   then run the terminal comment, current working pwd.

`cd ~/public_html , php -S localhost:8000`

-   Now run php built-in web server.

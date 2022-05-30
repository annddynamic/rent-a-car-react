package api;

import java.io.BufferedReader;
import java.io.FileWriter;
import java.sql.ResultSet;
import org.json.JSONArray;
import org.json.JSONObject;
import java.sql.ResultSet;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class JSONProcessor<T> {
    private final Class<T> type;

    public JSONProcessor(Class<T> type) {
        this.type = type;
    }

    public String serialize(T object, String path) {
        try {
            Gson gson = new GsonBuilder().create();
            String jsonContent = gson.toJson(object);
            if (path != null) {
                FileWriter writer = new FileWriter(path, false);
                writer.write(jsonContent);
                writer.close();
            }
            return jsonContent;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return null;
        }
    }

    public T deserialize(BufferedReader httpInput) {
        try {
            StringBuilder stringBuilder = new StringBuilder();
            String line;
            while ((line = httpInput.readLine()) != null) {
                stringBuilder.append(line);
            }
            httpInput.close();
            String str = stringBuilder.toString();
            Gson gson = new GsonBuilder().create();
            T object = gson.fromJson(str, this.type);
            return object;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return null;
        }
    }

    public  JSONArray convert(ResultSet resultSet) throws Exception {

        JSONArray jsonArray = new JSONArray();

        while (resultSet.next()) {

            int columns = resultSet.getMetaData().getColumnCount();
            JSONObject obj = new JSONObject();

            for (int i = 0; i < columns; i++)
                obj.put(resultSet.getMetaData().getColumnLabel(i + 1).toLowerCase(), resultSet.getObject(i + 1));

            jsonArray.put(obj);
        }
        return jsonArray;
    }
}